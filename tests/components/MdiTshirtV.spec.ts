
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTshirtV from "../../src/components/MdiTshirtV.vue";

test("MdiTshirtV snapshot", () => {
  const wrapper = mount(MdiTshirtV, {});
  expect(wrapper.html()).toMatchSnapshot();
});
