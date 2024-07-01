
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarLimousine from "../../src/components/MdiCarLimousine.vue";

test("MdiCarLimousine snapshot", () => {
  const wrapper = mount(MdiCarLimousine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
