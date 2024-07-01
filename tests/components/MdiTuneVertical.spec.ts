
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTuneVertical from "../../src/components/MdiTuneVertical.vue";

test("MdiTuneVertical snapshot", () => {
  const wrapper = mount(MdiTuneVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
