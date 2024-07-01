
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftBing from "../../src/components/MdiMicrosoftBing.vue";

test("MdiMicrosoftBing snapshot", () => {
  const wrapper = mount(MdiMicrosoftBing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
