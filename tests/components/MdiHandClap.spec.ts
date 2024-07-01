
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandClap from "../../src/components/MdiHandClap.vue";

test("MdiHandClap snapshot", () => {
  const wrapper = mount(MdiHandClap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
