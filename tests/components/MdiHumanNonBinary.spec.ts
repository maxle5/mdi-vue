
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanNonBinary from "../../src/components/MdiHumanNonBinary.vue";

test("MdiHumanNonBinary snapshot", () => {
  const wrapper = mount(MdiHumanNonBinary, {});
  expect(wrapper.html()).toMatchSnapshot();
});
