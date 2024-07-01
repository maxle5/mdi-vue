
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckSnowflake from "../../src/components/MdiTruckSnowflake.vue";

test("MdiTruckSnowflake snapshot", () => {
  const wrapper = mount(MdiTruckSnowflake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
