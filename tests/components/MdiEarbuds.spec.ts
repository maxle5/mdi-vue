
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarbuds from "../../src/components/MdiEarbuds.vue";

test("MdiEarbuds snapshot", () => {
  const wrapper = mount(MdiEarbuds, {});
  expect(wrapper.html()).toMatchSnapshot();
});
