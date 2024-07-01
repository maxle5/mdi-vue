
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShipWheel from "../../src/components/MdiShipWheel.vue";

test("MdiShipWheel snapshot", () => {
  const wrapper = mount(MdiShipWheel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
