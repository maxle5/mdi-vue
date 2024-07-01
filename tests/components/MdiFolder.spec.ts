
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolder from "../../src/components/MdiFolder.vue";

test("MdiFolder snapshot", () => {
  const wrapper = mount(MdiFolder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
