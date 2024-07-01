
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteRestore from "../../src/components/MdiDeleteRestore.vue";

test("MdiDeleteRestore snapshot", () => {
  const wrapper = mount(MdiDeleteRestore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
