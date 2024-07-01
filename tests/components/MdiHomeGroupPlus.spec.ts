
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeGroupPlus from "../../src/components/MdiHomeGroupPlus.vue";

test("MdiHomeGroupPlus snapshot", () => {
  const wrapper = mount(MdiHomeGroupPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
