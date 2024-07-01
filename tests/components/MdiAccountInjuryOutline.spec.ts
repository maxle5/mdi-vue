
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountInjuryOutline from "../../src/components/MdiAccountInjuryOutline.vue";

test("MdiAccountInjuryOutline snapshot", () => {
  const wrapper = mount(MdiAccountInjuryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
