
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadio from "../../src/components/MdiRadio.vue";

test("MdiRadio snapshot", () => {
  const wrapper = mount(MdiRadio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
