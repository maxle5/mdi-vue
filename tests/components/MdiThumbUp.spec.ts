
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThumbUp from "../../src/components/MdiThumbUp.vue";

test("MdiThumbUp snapshot", () => {
  const wrapper = mount(MdiThumbUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
