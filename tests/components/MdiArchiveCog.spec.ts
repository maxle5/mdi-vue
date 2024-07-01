
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveCog from "../../src/components/MdiArchiveCog.vue";

test("MdiArchiveCog snapshot", () => {
  const wrapper = mount(MdiArchiveCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
