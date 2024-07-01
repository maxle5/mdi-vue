
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarLiftedPickup from "../../src/components/MdiCarLiftedPickup.vue";

test("MdiCarLiftedPickup snapshot", () => {
  const wrapper = mount(MdiCarLiftedPickup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
