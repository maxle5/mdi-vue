
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoachLampVariant from "../../src/components/MdiCoachLampVariant.vue";

test("MdiCoachLampVariant snapshot", () => {
  const wrapper = mount(MdiCoachLampVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
