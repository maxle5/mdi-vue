
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckFlatbed from "../../src/components/MdiTruckFlatbed.vue";

test("MdiTruckFlatbed snapshot", () => {
  const wrapper = mount(MdiTruckFlatbed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
