
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZipDisk from "../../src/components/MdiZipDisk.vue";

test("MdiZipDisk snapshot", () => {
  const wrapper = mount(MdiZipDisk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
