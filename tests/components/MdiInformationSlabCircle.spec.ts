
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationSlabCircle from "../../src/components/MdiInformationSlabCircle.vue";

test("MdiInformationSlabCircle snapshot", () => {
  const wrapper = mount(MdiInformationSlabCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
