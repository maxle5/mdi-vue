
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCricket from "../../src/components/MdiCricket.vue";

test("MdiCricket snapshot", () => {
  const wrapper = mount(MdiCricket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
