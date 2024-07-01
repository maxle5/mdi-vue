
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationOff from "../../src/components/MdiInformationOff.vue";

test("MdiInformationOff snapshot", () => {
  const wrapper = mount(MdiInformationOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
