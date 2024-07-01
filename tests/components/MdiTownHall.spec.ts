
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTownHall from "../../src/components/MdiTownHall.vue";

test("MdiTownHall snapshot", () => {
  const wrapper = mount(MdiTownHall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
