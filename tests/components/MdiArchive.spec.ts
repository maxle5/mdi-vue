
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchive from "../../src/components/MdiArchive.vue";

test("MdiArchive snapshot", () => {
  const wrapper = mount(MdiArchive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
