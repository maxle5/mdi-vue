
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentAlert from "../../src/components/MdiCommentAlert.vue";

test("MdiCommentAlert snapshot", () => {
  const wrapper = mount(MdiCommentAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
