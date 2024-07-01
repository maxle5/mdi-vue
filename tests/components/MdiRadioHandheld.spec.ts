
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioHandheld from "../../src/components/MdiRadioHandheld.vue";

test("MdiRadioHandheld snapshot", () => {
  const wrapper = mount(MdiRadioHandheld, {});
  expect(wrapper.html()).toMatchSnapshot();
});
