
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDumpTruck from "../../src/components/MdiDumpTruck.vue";

test("MdiDumpTruck snapshot", () => {
  const wrapper = mount(MdiDumpTruck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
