
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettleSteamOutline from "../../src/components/MdiKettleSteamOutline.vue";

test("MdiKettleSteamOutline snapshot", () => {
  const wrapper = mount(MdiKettleSteamOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
