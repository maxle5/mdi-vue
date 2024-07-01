
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorageTank from "../../src/components/MdiStorageTank.vue";

test("MdiStorageTank snapshot", () => {
  const wrapper = mount(MdiStorageTank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
