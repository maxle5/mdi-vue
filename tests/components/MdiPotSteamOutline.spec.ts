
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPotSteamOutline from "../../src/components/MdiPotSteamOutline.vue";

test("MdiPotSteamOutline snapshot", () => {
  const wrapper = mount(MdiPotSteamOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
