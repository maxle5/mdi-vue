
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveMusic from "../../src/components/MdiArchiveMusic.vue";

test("MdiArchiveMusic snapshot", () => {
  const wrapper = mount(MdiArchiveMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
