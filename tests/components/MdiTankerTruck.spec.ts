
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTankerTruck from "../../src/components/MdiTankerTruck.vue";

test("MdiTankerTruck snapshot", () => {
  const wrapper = mount(MdiTankerTruck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
