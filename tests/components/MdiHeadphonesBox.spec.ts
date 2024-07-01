
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadphonesBox from "../../src/components/MdiHeadphonesBox.vue";

test("MdiHeadphonesBox snapshot", () => {
  const wrapper = mount(MdiHeadphonesBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
