
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNintendoGameBoy from "../../src/components/MdiNintendoGameBoy.vue";

test("MdiNintendoGameBoy snapshot", () => {
  const wrapper = mount(MdiNintendoGameBoy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
