
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPointPlus from "../../src/components/MdiAccessPointPlus.vue";

test("MdiAccessPointPlus snapshot", () => {
  const wrapper = mount(MdiAccessPointPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
