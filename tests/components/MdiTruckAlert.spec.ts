
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckAlert from "../../src/components/MdiTruckAlert.vue";

test("MdiTruckAlert snapshot", () => {
  const wrapper = mount(MdiTruckAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
