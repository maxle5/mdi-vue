
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTuneVariant from "../../src/components/MdiTuneVariant.vue";

test("MdiTuneVariant snapshot", () => {
  const wrapper = mount(MdiTuneVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
