
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabasePlus from "../../src/components/MdiDatabasePlus.vue";

test("MdiDatabasePlus snapshot", () => {
  const wrapper = mount(MdiDatabasePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
