
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCog from "../../src/components/MdiFileCog.vue";

test("MdiFileCog snapshot", () => {
  const wrapper = mount(MdiFileCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
