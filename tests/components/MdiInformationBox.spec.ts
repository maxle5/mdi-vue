
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationBox from "../../src/components/MdiInformationBox.vue";

test("MdiInformationBox snapshot", () => {
  const wrapper = mount(MdiInformationBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
