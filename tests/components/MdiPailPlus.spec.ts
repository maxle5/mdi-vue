
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailPlus from "../../src/components/MdiPailPlus.vue";

test("MdiPailPlus snapshot", () => {
  const wrapper = mount(MdiPailPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
