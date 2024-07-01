
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotePlus from "../../src/components/MdiNotePlus.vue";

test("MdiNotePlus snapshot", () => {
  const wrapper = mount(MdiNotePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
