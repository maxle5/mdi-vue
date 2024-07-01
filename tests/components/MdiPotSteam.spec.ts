
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPotSteam from "../../src/components/MdiPotSteam.vue";

test("MdiPotSteam snapshot", () => {
  const wrapper = mount(MdiPotSteam, {});
  expect(wrapper.html()).toMatchSnapshot();
});
