
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerCheck from "../../src/components/MdiBeakerCheck.vue";

test("MdiBeakerCheck snapshot", () => {
  const wrapper = mount(MdiBeakerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
