
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiComment from "../../src/components/MdiComment.vue";

test("MdiComment snapshot", () => {
  const wrapper = mount(MdiComment, {});
  expect(wrapper.html()).toMatchSnapshot();
});
