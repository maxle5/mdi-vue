
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeBraces from "../../src/components/MdiCodeBraces.vue";

test("MdiCodeBraces snapshot", () => {
  const wrapper = mount(MdiCodeBraces, {});
  expect(wrapper.html()).toMatchSnapshot();
});
