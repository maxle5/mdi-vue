
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignRealEstate from "../../src/components/MdiSignRealEstate.vue";

test("MdiSignRealEstate snapshot", () => {
  const wrapper = mount(MdiSignRealEstate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
