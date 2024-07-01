
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelativeScale from "../../src/components/MdiRelativeScale.vue";

test("MdiRelativeScale snapshot", () => {
  const wrapper = mount(MdiRelativeScale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
