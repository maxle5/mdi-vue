
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWarehouse from "../../src/components/MdiWarehouse.vue";

test("MdiWarehouse snapshot", () => {
  const wrapper = mount(MdiWarehouse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
