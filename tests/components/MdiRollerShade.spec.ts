
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRollerShade from "../../src/components/MdiRollerShade.vue";

test("MdiRollerShade snapshot", () => {
  const wrapper = mount(MdiRollerShade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
