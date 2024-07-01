
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarDoor from "../../src/components/MdiCarDoor.vue";

test("MdiCarDoor snapshot", () => {
  const wrapper = mount(MdiCarDoor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
