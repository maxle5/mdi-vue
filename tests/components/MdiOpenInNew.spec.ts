
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOpenInNew from "../../src/components/MdiOpenInNew.vue";

test("MdiOpenInNew snapshot", () => {
  const wrapper = mount(MdiOpenInNew, {});
  expect(wrapper.html()).toMatchSnapshot();
});
